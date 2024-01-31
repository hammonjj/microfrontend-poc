export default function Root(props) {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column" 
    }}>
      <h1>Sqaures Route</h1>
      <section>This is coming from the Root component of {props.name}</section>
    </div>);
}
