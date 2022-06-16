export default function ({ $cookies, redirect }) {
  if (!$cookies.get('home')) {
    redirect('/welcome')
  }
}
