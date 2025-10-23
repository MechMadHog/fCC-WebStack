// src/components/HelloJsx.jsx
export default function HelloJsx() {
  const JSX = (
    <div className="myDiv">
      {/* This is a JSX comment */}
      <h2>Welcome to React!</h2>
      <br />
      <p>Be sure to close all tags!</p>
      <hr />
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    </div>
  );

  return JSX;
}
