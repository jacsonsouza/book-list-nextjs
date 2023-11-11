async function POST() {
  const res = await fetch("localhost/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Request),
  });

  const data = await res.json();

  return Response.json(data);
}

export default POST;
