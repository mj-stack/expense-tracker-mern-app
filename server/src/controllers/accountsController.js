const signupUser = (req, res) => {
  const { name, surname, email, password, confirmPassword } = req.body;
  console.log(name, surname, email, password, confirmPassword);
  res.send("Deepak joshi");
};

const loginUser = (req, res) => {};

export { signupUser, loginUser };
