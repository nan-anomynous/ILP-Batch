import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./footer";
import List from "./Component/List/List";
import ProductCatlog from "./Component/ProductCatlog/ProductCatlog";
import Lolu from "./Lolu";
import Goal from "./Goal";
import Dashboard from "./Component/Dashboard";
import Calculator from "./Component/Calculator";
import { useState } from "react";
import User from "./Component/User";
import Counter2 from "./Component/Counter2";
import Timer from "./Component/Timer";
import Counter from "./Component/Counter";
import Ind from "./Component/Ind";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Main from "./CourseCard";

function App() {
  const students = [
    {
      id: 1,
      name: "Aakash Tyagi",
      gender: "Male",
      marks: { math: 76, english: 82, science: 69 },
    },
    {
      id: 2,
      name: "Shivangi Shukla",
      gender: "Female",
      marks: { math: 91, english: 88, science: 95 },
    },
    {
      id: 3,
      name: "Naman Parashar",
      gender: "Male",
      marks: { math: 65, english: 74, science: 70 },
    },
    {
      id: 4,
      name: "Nandini Chaturvedi",
      gender: "Female",
      marks: { math: 89, english: 90, science: 92 },
    },
    {
      id: 5,
      name: "Sujal Rastogi",
      gender: "Male",
      marks: { math: 70, english: 68, science: 73 },
    },
    {
      id: 6,
      name: "Ava Singh",
      gender: "Female",
      marks: { math: 4, english: 9, science: 8 },
    },
    {
      id: 7,
      name: "Harshit Pathak",
      gender: "Male",
      marks: { math: 79, english: 75, science: 85 },
    },
    {
      id: 8,
      name: "Zara Ali",
      gender: "Female",
      marks: { math: 92, english: 87, science: 90 },
    },
    {
      id: 9,
      name: "Saksham Sharma",
      gender: "Male",
      marks: { math: 60, english: 70, science: 66 },
    },
    {
      id: 10,
      name: "Chloe Ramirez",
      gender: "Female",
      marks: { math: 15, english: 8, science: 8 },
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      features: ["Bluetooth 5.0", "Noise Cancellation", "20h Battery Life"],
      image: "https://example.com/headphones.jpg",
      onSale: true,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
      image: "https://example.com/smartwatch.jpg",
      onSale: false,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 45.5,
      features: ["360° Sound", "12h Battery Life", "Waterproof"],
      image: "https://example.com/speaker.jpg",
      onSale: true,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 59.99,
      features: ["RGB Lighting", "Programmable Buttons", "Adjustable DPI"],
      image: "https://example.com/mouse.jpg",
      onSale: false,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 89.99,
      features: ["Tactile Switches", "Backlit Keys", "Detachable Cable"],
      image: "https://example.com/keyboard.jpg",
      onSale: true,
      rating: 4.6,
    },
    {
      id: 6,
      name: "4K Monitor",
      price: 299.0,
      features: ["3840x2160 Resolution", "HDR10", "IPS Panel"],
      image: "https://example.com/monitor.jpg",
      onSale: false,
      rating: 4.4,
    },
    {
      id: 7,
      name: "Laptop Stand",
      price: 29.99,
      features: ["Adjustable Height", "Aluminum Build", "Anti-Slip Pads"],
      image: "https://example.com/stand.jpg",
      onSale: true,
      rating: 4.1,
    },
    {
      id: 8,
      name: "Noise Cancelling Earbuds",
      price: 79.99,
      features: [
        "Active Noise Cancellation",
        "Wireless Charging",
        "Touch Controls",
      ],
      image: "https://example.com/earbuds.jpg",
      onSale: true,
      rating: 4.3,
    },
    {
      id: 9,
      name: "Smartphone Gimbal",
      price: 119.99,
      features: ["3-Axis Stabilization", "Auto Tracking", "Long Battery Life"],
      image: "https://example.com/gimbal.jpg",
      onSale: false,
      rating: 4.5,
    },
    {
      id: 10,
      name: "USB-C Hub",
      price: 39.99,
      features: ["HDMI Output", "3 USB Ports", "SD Card Reader"],
      image: "https://example.com/hub.jpg",
      onSale: true,
      rating: 4.0,
    },
  ];

  const user = {
    name: "Raju",
    role: "student",
  };
  const [showUser, setShowUser] = useState(true);

  const handleUnmountUser = () => {
    setShowUser(false);
  };

  // const courses = [
  //   { id: 1, title: "React", instructor: "John", duration: "2 weeks" },
  //   {
  //     id: 2,
  //     title: "Node.js Master",
  //     instructor: "Jenie",
  //     duration: "4 weeks",
  //   },
  //   { id: 3, title: "Python Basics", instructor: "Arica", duration: "6 weeks" },
  //   {
  //     id: 4,
  //     title: "Data Structures and Algorithms",
  //     instructor: "Boby",
  //     duration: "8 weeks",
  //   },
  //   {
  //     id: 5,
  //     title: "Machine Learning",
  //     instructor: "George",
  //     duration: "12 weeks",
  //   },
  //   {
  //     id: 6,
  //     title: "Web Designing",
  //     instructor: "Tenuri",
  //     duration: "3 weeks",
  //   },
  // ];

  // renderAllCourses = (data) => {
  //   return data.map((course) => <CourseCard key={course.id} course={course} />);
  // };

  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={< />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes> */}
        {/* <Counter2/>
      
        {/* <Counter/>  */}
        {/* <Timer/> */}
        {/* <Ind/> */}
        {/* <List data={students}/> */}
        {/* <ProductCatlog data={products}/>  */}
        {/* {showUser && <User onUnmount={handleUnmountUser} />}  */}
        {/* <Lolu user="Nandini"/>
      <Goal isGoal="false"/>
      <Dashboard  User={user}/>
      <Calculator/>
   */}
        {/* <Login />
      <Signup /> */}
        {/* 
      <Box data={courses} render={this.renderAllCourses} /> */}
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
