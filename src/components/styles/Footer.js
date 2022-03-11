import { makeStyles } from "@mui/styles";

const FooterStyles = makeStyles((theme) => ({
    linksContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "2rem",
        color: "white",
        [theme.breakpoints.down('md')]: {
            padding: "0 1.2rem",
            marginBottom: "2rem"
        }
      },
      mainContainer: {
          backgroundColor: "#202020"
      },
      textContainer: {
          display: "flex",
          alignItems: "center",
          padding: "0 15.7rem",
          margin: "3rem 0rem",
          color: "white",
          [theme.breakpoints.down('md')]: {
              padding: "0 1.2rem",
              textAlign: "center"
          }
      },
      divider: {
          display: "none",
          [theme.breakpoints.down("md")]: {
              display: "block"
          }
      },
      dot: {
          display: "none",
          [theme.breakpoints.down("md")]: {
              display: "block"
          }
      }
}))

export default FooterStyles;