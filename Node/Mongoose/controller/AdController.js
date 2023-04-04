import Ad from "../models/Ad.js";
const AdCtrl = {};

// Traer todos los anuncios
AdCtrl.getAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    !ads
      ? res.status(404).json({ message: "There is no ads" })
      : res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Traer un anuncio en especifico
AdCtrl.getAd = async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await Ad.findById(id);
    !ad
      ? res.status(404).json({ message: "No ads found" })
      : res.status(200).json(ad);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Crear un anuncio
AdCtrl.createAd = async (req, res) => {
  const { user, name, type, title, content, category, price } = req.body;
  try {
    const newAd = new Ad({
      user,
      name,
      type,
      title,
      content,
      category,
      price,
    });
    const ad = await newAd.save();
    res.status(200).json(ad);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Actualizar un anuncio
AdCtrl.updateAd = async (req, res) => {
  const { id } = req.params;
  const { user, name, type, title, content, category, price } = req.body;
  try {
    const ad = await Ad.findById(id);
    !ad
      ? res.status(404).json({ message: "No ads found" })
      : (ad.user == user),
      (ad.name = name),
      (ad.type = type),
      (ad.title = title),
      (ad.content = content),
      (ad.category = category),
      (ad.price = price);
      
    const adsUpdated = await ad.save();
    res.status(200).json(adsUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Eliminar un anuncio
AdCtrl.deleteAd = async (req, res) => {
  const { id } = req.params;
  try {
    const ad = await Ad.findByIdAndDelete(id);
    !ad
      ? res.status(404).json({ message: "No ad found" })
      : res.status(200).json({ message: "Ad eliminated" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { AdCtrl };
