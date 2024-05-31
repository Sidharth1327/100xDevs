
// For equal widthss
export default function Test() {
  return (
    <div className="grid grid-cols-3">
      <div style={{ background: "red" }}>My name is Sid</div>
      <div style={{ background: "green" }}>My name is Sidhu</div>
      <div style={{ background: "blue" }}>My name is Sidharth</div>
    </div>
  );
}


// For unequal widths
export default function Test() {
  return (
    <div className="grid grid-cols-3">
      <div className = "col-span-5" style={{ background: "red" }}>My name is Sid</div>
      <div className = "col-span-5" style={{ background: "green" }}>My name is Sidhu</div>
      <div className = "col-span-2" style={{ background: "blue" }}>My name is Sidharth</div>
    </div>
  );
}