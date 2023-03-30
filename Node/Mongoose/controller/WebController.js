import Web from "../models/Web.js";
const WebCtrl = {};

// Traer todos los anuncios
WebCtrl.getWebs = async (req, res) => {
  try {
    const web = await Web.find();
    !web
      ? res.status(404).json({ message: "There is no webs" })
      : res.status(200).json(web);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Traer un anuncio en especifico
WebCtrl.getWeb = async (req, res) => {
  const { id } = req.params;
  try {
    const web = await Web.findById(id);
    !web
      ? res.status(404).json({ message: "No web found" })
      : res.status(200).json(web);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Traer todas las paginas web de un anuncio
WebCtrl.getWebsByAd = async (req, res) => {
  const { ad } = req.params;
  try {
    const web = await Web.find({ ad: ad });
    !web
      ? res.status(404).json({ message: "No web found" })
      : res.status(200).json(web);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

// Crear un anuncio
WebCtrl.createWeb = async (req, res) => {
  const { ad, name, topic, url, dateEnd } = req.body;
  try {
    const newWeb = new Web({
      ad,
      name,
      topic,
      url,
      dateEnd,
    });
    const web = await newWeb.save();
    res.status(200).json(web);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Actualizar un anuncio
WebCtrl.updateWeb = async (req, res) => {
  const { id } = req.params;
  const { ad, name, topic, url, dateEnd } = req.body;
  try {
    const web = await Web.findById(id);
    console.log(web);
    !web
      ? res.status(404).json({ message: "No web found" })
      : (web.ad == ad)(web.name == name)(web.topic == topic)(web.url == url)(
          web.ad == dateEnd
        );
    const webUpdated = await web.save();
    res.status(200).json(webUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Eliminar un anuncio
WebCtrl.deleteWeb = async (req, res) => {
  const { id } = req.params;
  try {
    const web = await Web.findByIdAndDelete(id);
    !web
      ? res.status(404).json({ message: "No web found" })
      : res.status(200).json({ message: "Web eliminated" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { WebCtrl };
