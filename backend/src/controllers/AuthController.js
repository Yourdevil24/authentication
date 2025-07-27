const signup = async(req,res)=>{
    try {
        const { name,email,password} = req.body;
        const user = new UserModel.findOne({email});
        if(user){
            res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

const login = async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }
        const token = jwt.sign({ id: user._id,email:user.email }, process.env.JWT_SECRET, { expiresIn: "8h" });
        res.status(200).json({ message: "Login successful", success: true, token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}


const logout = ()=>{
    try {
        sessionStorage.clear();
        res.status(200).json({ message: "Logout successful", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = {
    signup,
    login,
    logout
}