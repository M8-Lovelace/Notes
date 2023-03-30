import User from "../models/User.js";
const UserCtrl = {};

// Traer todos los usuarios
UserCtrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    !users
      ? res.status(404).json({ message: "No hay usuarios" })
      : res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Traer un usuario en especifico
UserCtrl.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    !user
      ? res.status(404).json({ message: "No se encontro el usuario" })
      : res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Crear un usuario
UserCtrl.createUser = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      phone,
      address,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Actualizar un usuario
UserCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;
  try {
    const user = await User.findById(id);
    !user
      ? res.status(404).json({ message: "No se encontro el usuario" })
      : (user.name = name),
      (user.email = email),
      (user.phone = phone),
      (user.address = address);
    const userUpdated = await user.save();
    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// Eliminar un usuario
UserCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    !user
      ? res.status(404).json({ message: "No se encontro el usuario" })
      : res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { UserCtrl };
