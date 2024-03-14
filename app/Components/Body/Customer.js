const Customer = () => {
  return (
    <div className="flex flex-wrap items-center align-middle justify-evenly px-[100.23px]  my-[11.27px] bg-[#F5F7FA] ">
      <img
        className="w-[226.92px] h-[226.92px] object-cover"
        src="/customer.png"
        alt="hello"
      />
      <div className="flex-col p-[22.27px] w-[520.66px]">
        <p className="font-inter font-medium text-[11.14px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="font-inter font-medium text-[13.92px] text-[#4CAF4F] my-[5.57px]">
          Tim Smith
        </p>
        <p className="font-inter text-[11.14px] text-[#89939E]">
          British Dragon Boat Racing Association
        </p>
        <div className="flex flex-wrap justify-evenly items-center my-[22.27px]">
          <img src="/customer1.svg" alt="image" />
          <img src="/customer2.svg" alt="image" />
          <img src="/customer3.svg" alt="image" />
          <img src="/customer4.svg" alt="image" />
          <img src="/customer5.svg" alt="image" />
          <img src="/customer6.svg" alt="image" />
          <div className="flex font-inter text-[13.92px] text-[#4CAF4F] font-semibold">
            Meet all customers
            <img src="/customerarrow.svg" alt="hello" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
