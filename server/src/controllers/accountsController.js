const signupUser = (req, res) => {
  console.log(req.body);
  res.send("Deepak joshi");
};

const loginUser = (req, res) => {};

export { signupUser, loginUser };
