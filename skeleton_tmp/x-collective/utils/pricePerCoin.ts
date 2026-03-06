const pricePerCoin = (unicoinPrice: number) => (unicoinPrice < 1 ? unicoinPrice * 100 : unicoinPrice);

export default pricePerCoin;
