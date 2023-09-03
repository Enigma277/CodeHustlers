import Header from "../../components/Header/Header";
import style from "./Home.module.css";
import videoFile from "./video.mp4";
import { Container, lighten } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="videoContainer">
        <video autoPlay muted loop className={style.myVideo}>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className={style.container}>
        <header>Explore Learn Build</header>
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4rem",
              width: "80%",
              height: "80%",
              alignItems: "center",
              "@media (max-width:900px)": {
                flexDirection: "column",
              },
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                width: "30rem",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Compiler
              </Typography>
              <Typography>
                Dive into our compiler to experiment with code, test your
                skills, and see real-time outputs. Collaborate with peers on
                coding projects and learn by doing. Not only can you create and
                run code in our compiler, but you can also save your code
                snippets securely in your account. Need to access them later or
                download them to your local system? We've got you covered.
              </Typography>
              <Button
                onClick={() => navigate("/compiler")}
              >
                Get Started
                <NavigateNextIcon></NavigateNextIcon>
              </Button>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                width: "30rem",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Blogs
              </Typography>
              <Typography>
                Empowerment through Sharing: We understand that learning is a
                collaborative journey, and we want to give every student the
                opportunity to share their knowledge and experiences with
                others. Whether you're an aspiring writer, a coding enthusiast,
                or just passionate about a subject, [Your App Name] is your
                canvas to create, publish, and share your insights with the
                world.
              </Typography>
              <Button
                onClick={() => navigate("/blogs")}
                // sx={{ backgroundColor: "#FFFFFF" }}
              >
                Get Started
                <NavigateNextIcon></NavigateNextIcon>
              </Button>
            </Container>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
