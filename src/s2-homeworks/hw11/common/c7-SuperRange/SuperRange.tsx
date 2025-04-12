import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: "150px",
        marginLeft: "19px",
        marginRight: "19px",

        "& .MuiSlider-rail": {
          backgroundColor: "#8b8b8b", // Цвет неактивной части
        },
        "& .MuiSlider-track": {
          backgroundColor: "#01cb22", // Цвет активной части
          border: "none",
        },
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "white", // Цвет внутренней части
          border: "1px solid #01cb22", // Цвет границы
          borderRadius: "50%", // Делаем бегунок круглым
          boxShadow: "none", // Убираем тень
          "&::before": {
            content: '""', // Создаем псевдоэлемент
            position: "absolute",
            top: "50%", // Центрируем по вертикали
            left: "50%", // Центрируем по горизонтали
            height: 6, // Высота внутреннего круга
            width: 6, // Ширина внутреннего круга
            backgroundColor: "#01cb22", // Цвет внутреннего круга
            borderRadius: "50%", // Делаем внутренний круг круглым
            transform: "translate(-50%, -50%)", // Центрируем внутренний круг
          },
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
