interface RegisterForm {
  isValid: boolean;
  data: {
    username: string;
    email: string;
    password: string;
  };
}

interface LoginForm {
  email: string;
  password: string;
}

interface CreatePost {
  isValid: boolean;
  data: {
    title: string;
    body: string;
    username: string;
  };
}

const registerForm: RegisterForm = {
  isValid: true,
  data: {
    username: "theniteshdev",
    email: "nitesh.dev@proton.me",
    password: "secure1234",
  },
};

const loginForm = {
  isValid: true,
  data: {
    email: "nites.dev@proton.me",
    password: "Secure1234",
  },
};

const createPost = {
  isValid: true,
  data: {
    title: "Nodejs Learning Path",
    body: "Learn from Anurag sir is the best experience till now!",
    username: "theniteshdev",
  },
};
