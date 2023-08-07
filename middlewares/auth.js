export default function (req, res, next) {
  const user = await useUser()
  
  if (user == null && user == undefined) {
    redirect('/') 
}
