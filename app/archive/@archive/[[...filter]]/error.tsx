"use client";

export default function FilterError({ error }: { error: { message: string } }) {
  return (
    <div id="error">
      <h1>An error occured!</h1>
      <p>{error.message}.</p>
    </div>
  );
}
