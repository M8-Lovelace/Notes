import Admin from "../models/Admin.js";
const AdminCtrl = {};

// Traer todos los admins
AdminCtrl.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    !admins
      ? res.status(404).json({ message: "No hay admins" })
      : res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Traer un admin en especifico
AdminCtrl.getAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    !admin
      ? res.status(404).json({ message: "No se encontró el admin" })
      : res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Crear un admin
AdminCtrl.createAdmin = async (req, res) => {
  const { name, document, email, password } = req.body;
  try {
    const newAdmin = new Admin({
      name,
      document,
      email,
      password,
    });
    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Actualizar un usuario
AdminCtrl.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, document, email, password } = req.body;
  try {
    const admin = await Admin.findById(id);
    !admin
      ? res.status(404).json({ message: "No se encontro el admin" })
      : (admin.name = name),
      (admin.document = document),
      (admin.email = email),
      (admin.password = password);
    const adminUpdated = await admin.save();
    res.status(200).json(adminUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Eliminar un usuario
AdminCtrl.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findByIdAndDelete(id);
    !admin
      ? res.status(404).json({ message: "No se encontro el admin" })
      : res.status(200).json({ message: "Admin eliminado" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { AdminCtrl };
