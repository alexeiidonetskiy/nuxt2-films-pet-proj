// middleware/session.js
import cookie from 'cookie';
import cookieParser from 'cookie-parser';

export default function (req, res, next) {
  const parsedCookies = cookie.parse(req.headers.cookie || '');
  const sessionData = parsedCookies.session || null;
  req.session = JSON.parse(sessionData || '{}');

  // Add a helper method to update the session
  req.updateSession = (data) => {
    req.session = { ...req.session, ...data };
    const serializedSession = JSON.stringify(req.session);
    res.setHeader('Set-Cookie', cookie.serialize('session', serializedSession, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week (adjust as needed)
      path: '/',
    }));
  };

  next();
}
