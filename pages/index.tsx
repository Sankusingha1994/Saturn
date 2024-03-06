import { fetchHome } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

export default function Home() {

  const { data, isPending, error } = useQuery({
    queryKey: ['homedata'],
    queryFn: fetchHome
  }

  )

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <Wrapper>
      <>
        <Box>
          <Slider {...settings}>
            {
              data?.data.data.homebanner.map((item) => {
                return (
                  <>
                    <div>
                      <img src={item.banner_image_path} alt="" style={{ position: "absolute" }} />
                      <div style={{ height: "550px", width: "100%", position: "relative", textAlign: "center" }}>
                        <h1 style={{ paddingTop: "200px", fontSize: "100px" }}>{item.banner_title}</h1>
                        {item && <p dangerouslySetInnerHTML={{ __html: item.banner_description }} style={{ marginTop: "50px", fontSize: "20px", color: "black" }}></p>}
                        <a href={item.banner_link}><button style={{ marginTop: "20px", width: "300px", height: "40px", borderRadius: "30px", background: "orange" }}>{item.banner_link_text}</button></a>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </Slider>
          <>
            <div style={{ textAlign: "center", margin: "100px 0px", fontSize: "30px" }}>
              <h1>{data?.data.data.what_help_section_title}</h1>
            </div>
            <div style={{ float: "left", marginLeft: "30%", padding: "20px" }}>
              <img src={data?.data.data.what_help_section1_image_path} alt="" style={{ padding: "20px" }} />
              <p>{data?.data.data.what_help_section1_title}</p>
            </div>
            <div style={{ float: "left", padding: "20px" }}>
              <img src={data?.data.data.what_help_section2_image_path} alt="" style={{ padding: "20px" }} />
              <p>{data?.data.data.what_help_section2_title}</p>
            </div>
            <div style={{ padding: "20px", marginLeft: "30%" }}>
              <img src={data?.data.data.what_help_section3_image_path} alt="" style={{ padding: "20px" }} />
              <p>{data?.data.data.what_help_section3_title}</p>
            </div>
          </>
          <>
            <div>
              {
                data?.data.data.homebanner.map((items) => {
                  return (
                    <>
                      <h1>{items.banner_link_text}</h1>
                      <p>Career Astrology helps you understand your strengths and what challenges you may face in your career. If you're feeling uncertain or are searching for answers, astrology can guide you and provide incredible insights into your career whether you're looking for a new role or starting a business.</p>
                      <button>{items.banner_link_text}</button>
                    </>
                  )

                })
              }

            </div>
            <div style={{ width: "80%", margin: "20px auto" }}>
              <Slider {...settings}>

                <div>
                  <img
                    src={data?.data?.data.what_client_say_image1_path}
                    // width={'100%'}
                    style={{
                      float: "left",
                      height: 500,
                      width: 500,
                      backgroundColor: "#2C4867",
                      borderRadius: "50%",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "50px", color: "#2C4867", mt: 5 }}>
                      {data?.data?.data.what_client_say_title1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        color: "#2C4867",
                        my: 3,
                        fontStyle: "italic",
                      }}
                    >
                      {data?.data?.data.what_client_say_topic1}!
                    </Typography>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.data?.data.what_client_say_description1 as string,
                      }}
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginTop: 5,
                        fontStyle: "italic",
                      }}
                    />
                    <Typography sx={{ fontSize: "22px", color: "#2C4867", mt: 3 }}>
                      -{data?.data.data.what_client_say_name1}
                    </Typography>
                    <Typography sx={{ fontSize: "22px", mb: 3, color: "gray" }}>
                      {data?.data.data.what_client_say_location1}
                    </Typography>
                  </div>
                </div>
                <div>
                  <img
                    src={data?.data?.data.what_client_say_image1_path}
                    // width={'100%'}
                    style={{
                      float: "left",
                      height: 500,
                      width: 500,
                      backgroundColor: "#2C4867",
                      borderRadius: "50%",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "50px", color: "#2C4867", mt: 5 }}>
                      {data?.data?.data.what_client_say_title2}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        color: "#2C4867",
                        my: 3,
                        fontStyle: "italic",
                      }}
                    >
                      {data?.data?.data.what_client_say_topic2}!
                    </Typography>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.data?.data.what_client_say_description2 as string,
                      }}
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginTop: 5,
                        fontStyle: "italic",
                      }}
                    />
                    <Typography sx={{ fontSize: "22px", color: "#2C4867", mt: 3 }}>
                      -{data?.data.data.what_client_say_name2}
                    </Typography>
                    <Typography sx={{ fontSize: "22px", mb: 3, color: "gray" }}>
                      {data?.data.data.what_client_say_location2}
                    </Typography>
                  </div>
                </div>
                <div>
                  <img
                    src={data?.data?.data.what_client_say_image1_path}
                    // width={'100%'}
                    style={{
                      float: "left",
                      height: 500,
                      width: 500,
                      backgroundColor: "#2C4867",
                      borderRadius: "50%",
                    }}
                  />
                  <div style={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "50px", color: "#2C4867", mt: 5 }}>
                      {data?.data?.data.what_client_say_title1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "22px",
                        color: "#2C4867",
                        my: 3,
                        fontStyle: "italic",
                      }}
                    >
                      {data?.data?.data.what_client_say_topic3}!
                    </Typography>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.data?.data.what_client_say_description3 as string,
                      }}
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginTop: 5,
                        fontStyle: "italic",
                      }}
                    />
                    <Typography sx={{ fontSize: "22px", color: "#2C4867", mt: 3 }}>
                      -{data?.data.data.what_client_say_name3}
                    </Typography>
                    <Typography sx={{ fontSize: "22px", mb: 3, color: "gray" }}>
                      {data?.data.data.what_client_say_location3}
                    </Typography>
                  </div>
                </div>
              </Slider>
            </div>
          </>
          <>
            <div style={{ width: "35%", marginLeft: "15%", marginTop: "100px", zIndex: -1, marginBottom: "100px" }}>
              <img src={data?.data.data.about_image_path} alt="" />
            </div>
            <div style={{ height: "470px", width: "40%", background: "#EBEAEF", color: "blue", margin: "-450px 700px", fontSize: "20px", padding: "76px", zIndex: 0 }}>
              <h1 style={{ fontSize: "50px", margin: "10px 20px" }}>{data?.data.data.about_title}</h1>
              {data && <p dangerouslySetInnerHTML={{ __html: data?.data.data.about_desc }}></p>}
              <a href={data?.data.data.about_link}><button style={{ height: "60px", width: "200px", margin: "20px 20px", background: "orange", fontSize: "20px", borderRadius: "30px" }}>{data?.data.data.about_link_text}</button></a>
            </div>
          </>
        </Box>
      </>
    </Wrapper>
  );
}
