const Role = require('../schema/roleSchema');

// Get all roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add role
exports.addRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const newRole = new Role({ name, permissions });
    await newRole.save();
    res.status(201).json(newRole);
  } catch (error) {
    console.error('Error creating role:', error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the role' });
  }
};

// Edit role
exports.editRole = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRole = await Role.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedRole) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(updatedRole);
  } catch (error) {
    console.error('Error updating role:', error.message);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the role' });
  }
};

// Delete role
exports.deleteRole = async (req, res) => {
  try {
    await Role.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
