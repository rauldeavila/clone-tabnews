function status(request, response) {
  response.status(200).send({ key: "Aqui está um exemplo de value." });
}

export default status;
