export default function Body(props) {
    return (
      <main className={props.style.body_container}>
        {props.children}
      </main>
    );
  }
  