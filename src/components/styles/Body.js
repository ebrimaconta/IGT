import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    btnSm: {
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            width: "18rem",
            marginTop: "1.5rem",
            justifyContent: "space-between"
        }
    },
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            backgroundColor: "#063970"
        }
      },
      twoCardsSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "0.5rem"
        }
      },
      cardContainer1: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "450px",
        backgroundColor: "white",
        border: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.15)",
        boxShadow: "0px 1px gray",
        borderRadius: "0.5rem",
        marginRight: "3rem",
        [theme.breakpoints.down('md')]: {
            width: "345px",
            marginRight: "0",
            marginBottom: "1rem",
            height: "200px"
        }
      },
      cardContainer2: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "450px",
        backgroundColor: "white",
        border: "solid 1px",
        borderColor: "rgba(0, 0, 0, 0.15)",
        boxShadow: "0px 1px gray",
        borderRadius: "0.5rem",
        [theme.breakpoints.down('md')]: {
            width: "345px",
            height: "200px"
        },
      },
        btn: {
            width: "14rem",
            marginTop: "1.5rem",
            [theme.breakpoints.down('md')]: {
                display: "none"
            }
        },
        arrow: {
            maxWidth: "160px",
        },
}))

export default useStyles;