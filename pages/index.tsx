import { fetchHome } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

export default function Home() {

  const { data , isPending, error } = useQuery({
    queryKey: ['homedata'],
    queryFn:  fetchHome
  }
  
  )
  console.log("fetch data",data);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <Wrapper>
      <>
      <Box>
      <Slider {...settings}/>
      {
        data?.data.data.homebanner.map((item)=>{
          return(
            <Box>
            <img src={item.banner_image_path} alt=""/>
            </Box>
          )
        })
      }
      </Box>
      </>
    </Wrapper>
  );
}
