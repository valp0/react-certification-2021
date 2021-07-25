// I believe this code ill be useful in the future

// import { useAuth } from '../../providers/Auth';

// const sectionRef = useRef(null);
// const { authenticated, logout } = useAuth();

// function deAuthenticate(event) {
//   event.preventDefault();
//   logout();
//   history.push('/');
// }

//   <section className="homepage" ref={sectionRef}>
//   <h1>Hello stranger!</h1>
//   {authenticated ? (
//     <>
//       <h2>Good to have you back</h2>
//       <span>
//         <Link to="/" onClick={deAuthenticate}>
//           ← logout
//         </Link>
//         <span className="separator" />
//         <Link to="/secret">show me something cool →</Link>
//       </span>
//     </>
//   ) : (
//     <Link to="/login">let me in →</Link>
//   )}
//   </section>
