const Error = ({ message }) => {
  return (
    <div className=" my-5 text-center px-4 text-danger">
      <h3>Üzgünüz Hata Oluştu Daha Sonra Tekrar deneyin</h3>
      <h3 className="text-primary"> {message}</h3>
    </div>
  );
};

export default Error;
