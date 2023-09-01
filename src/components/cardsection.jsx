import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import Cardone from "../../src/assets/cardone.png";
import Cardtwo from "../../src/assets/cardtwo.png";
import Cardthree from "../../src/assets/cardthree.png";

const cardData = [
  {
    id: 1,
    imageUrl: Cardone,
    text: "Making Parking Enforcement<br>Easier with Smart Digital<br>Solutions.",
    textone:
      "This innovative application provides a<br>comprehensive end-to-end solution for<br> issuing and managing penalty charge<br> notices, including payment processing and<br> appeals handling.",
  },
  {
    id: 2,
    imageUrl: Cardtwo,
    text: "We are committed to delivering<br>the highest customer service<br>and support levels.",
    textone:
      "This innovative application provides a<br>comprehensive end-to-end solution for<br> issuing and managing penalty charge<br> notices, including payment processing and<br> appeals handling.",
  },
  {
    id: 3,
    imageUrl: Cardthree,
    text: "From start to finish, our cloud<br>platform simplifies penalty<br>charge notice management.",
    textone:
      "This innovative application provides a<br>comprehensive end-to-end solution for<br> issuing and managing penalty charge<br> notices, including payment processing and<br> appeals handling.",
  },
];

const CardSection = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card sx={{borderRadius:"20px"}}>
              <CardMedia
                component="img"
                height="369px"
                width="373px"
                flex-shrink="0"
                image={card.imageUrl}
                alt={`Card ${card.id}`}
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "373px",
                  flexShrink: 0,
                }}
              >
                <Typography
                  variant="h1"
                  component="div"
                  dangerouslySetInnerHTML={{ __html: card.text }}
                  sx={{
                    color: "#3B4A45",
                    fontFamily: "Gilroy-Bold",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    textAlign: "start",
                  }}
                />
              </CardContent>
              <hr style={{ width: "15%", marginLeft: 16, border: "none", borderTop: "2px solid #21B07D", borderRadius: "2px" }} />

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#5C5F5E",
                  fontFamily: "Gilroy-Medium",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "30px",
                  textAlign: "start",
                  ml: "5%",
                }}
              >
                {card.textone.split("<br>").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardSection;
