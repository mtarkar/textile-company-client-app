import "./TshirtCard.css";

const tshirtData = [
  {
    name: "Classic Cotton T-shirt",
    price: 29.99,
    imgUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Loui Philip T-shirt",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Loui Philip T-shirt",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Loui Philip T-shirt",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  }, ];
const TshirtCard = () => {
  return (
    <>
      {tshirtData.map((item, index) => (
        <div className="card" key={index} style={{ margin: 4, padding: 2 }}>
          <img src={item.imgUrl} alt="Tshirt" className="card-img" />

          <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">{item.price}</p>

            <div className="card-actions">
              <button className="btn buy-btn">Buy</button>
              <button className="btn sell-btn">Sell</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TshirtCard;
