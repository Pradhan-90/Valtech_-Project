import { Carousel } from 'antd';


export const AntdCarousel= ({title, ...props }) => {
        return (
          <Carousel
            type="carousel"
            {...props}
          >
            {title}
          </Carousel>
        );
      };