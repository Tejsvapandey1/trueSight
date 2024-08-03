function footer() {
  return (
    <div className="flex items-center justify-center text-white h-[35vh]">
      <div className="container flex-col items-center justify-around flex-1">
        FocusFlow
        <p className="my-4 ">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
      <div className="flex flex-1">
        <div className="container flex justify-around">
          <div className="flex-col">
            Navigation
            <ul className="my-2 list-none">
              <li className="my-2 text-xs">home</li>
              <li className="my-2 text-xs">product</li>
            </ul>
          </div>
          <div>
            Website
            <ul className="my-2 list-none">
              <li className="my-2 text-xs">About</li>
              <li className="my-2 text-xs">Terms of use</li>
              <li className="my-2 text-xs">Privacy Policy</li>
            </ul>
          </div>
          <div>
            Account
            <ul className="my-2 list-none">
              <li className="my-2 text-xs">Create Account</li>
              <li className="my-2 text-xs">Login</li>
            </ul>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
}
export default footer;
