import { useState } from "react";
import { Button, Input } from "taskify-ui";

const GoogleMark = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    className="block shrink-0"
  >
    <path
      fill="#4285F4"
      d="M21.6 12.23c0-.78-.07-1.53-.2-2.23H12v4.22h5.37a4.6 4.6 0 0 1-1.99 3.02v2.51h3.23c1.89-1.74 2.99-4.31 2.99-7.52Z"
    />
    <path
      fill="#34A853"
      d="M12 22c2.7 0 4.96-.89 6.61-2.42l-3.23-2.51c-.9.6-2.04.95-3.38.95-2.6 0-4.81-1.76-5.6-4.12H3.06v2.59A9.99 9.99 0 0 0 12 22Z"
    />
    <path
      fill="#FBBC05"
      d="M6.4 13.9a6.03 6.03 0 0 1 0-3.8V7.51H3.06a10.01 10.01 0 0 0 0 8.98L6.4 13.9Z"
    />
    <path
      fill="#EA4335"
      d="M12 5.98c1.47 0 2.79.5 3.82 1.5l2.86-2.86A9.61 9.61 0 0 0 12 2 9.99 9.99 0 0 0 3.06 7.51L6.4 10.1C7.19 7.74 9.4 5.98 12 5.98Z"
    />
  </svg>
);

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path
      d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5.25 7.25 6.75 5 6.75-5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
    <path
      d="M7.75 10.75h8.5v7.5h-8.5v-7.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 10.75V8.5a2.5 2.5 0 0 1 5 0v2.25"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
    <path
      d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Sign in with email:", email, password);
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <main className="relative flex min-h-screen justify-center overflow-hidden bg-[#080711] px-5 pt-5 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute -left-28 -top-20 h-[440px] w-[440px] rounded-full bg-[#7d5ab9]/30 blur-[135px]" />
      <div className="absolute left-[48%] top-8 h-[330px] w-[330px] rounded-full bg-[#15384b]/18 blur-[115px]" />
      <div className="absolute -right-24 bottom-[-190px] h-[520px] w-[520px] rounded-full bg-[#e5925e]/20 blur-[120px]" />

      <section className="relative z-10 w-full max-w-[408px]">
        <div className="mb-5">
          <h1
            className="text-[38px] font-bold leading-[0.95] tracking-normal text-[#f3f1ed] sm:text-[40px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Welcome
          </h1>
          <p
            className="mt-1 text-[39px] font-bold italic leading-[0.95] tracking-normal text-[#efa975] sm:text-[40px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            back.
          </p>
          <p className="mt-4 text-[15px] text-[#8c879f]">
            Sign in to continue to your account
          </p>
        </div>

        {/* --------------------------------------------------------------------------------- */}

        <form
          className="rounded-[20px] border border-[#2b293d] bg-[#191827]/95 p-8 shadow-[0_22px_60px_rgba(0,0,0,0.38),0_0_48px_rgba(93,81,149,0.12)] backdrop-blur-xl h-[70%] w-[120%] flex items-center flex-col justify-around"
          onSubmit={(event) => {
            event.preventDefault();
            handleSignIn();
          }}
        >
          <Button
            label="Continue with Google"
            variant="ghost"
            size="lg"
            fullWidth
            onClick={handleGoogleSignIn}
            leftIcon={<GoogleMark />}
            className="h-[46px] rounded-[9px] border border-[#373348] bg-transparent px-5 py-0 text-[14px] font-semibold tracking-normal text-[#f3f0f4] hover:border-[#48435d] hover:bg-white/[0.03] hover:text-white"
          />

          <div className="relative my-8 flex items-center">
            <div className="h-px flex-1 bg-[#312d42]" />
            <span className="px-3 text-xs text-[#8d879f]">or sign in with email</span>
            <div className="h-px flex-1 bg-[#312d42]" />
          </div>
           
          <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#918aa4]">
                Email Address
              </label>
            </div>
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            size="lg"
            fullWidth
            leftIcon={<MailIcon />}
            leftIconClassName="left-4 text-[#8f89a6]"
            className="h-[46px] rounded-[9px] border-[#302c42] bg-[#11101d] py-0 pl-11 text-[14px] tracking-normal text-[#f1edf7] placeholder:text-[#5f596d] focus:border-[#efa975] focus:ring-[#efa975]/20"
          />
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#918aa4]">
                Password
              </label>
              <button
                type="button"
                className="text-xs font-semibold text-[#efa975] transition hover:text-[#ffc093]"
              >
                Forgot password?
              </button>
            </div>
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              size="lg"
              fullWidth
              leftIcon={<LockIcon />}
              leftIconClassName="left-4 text-[#8f89a6]"
              className="h-[46px] rounded-[9px] border-[#302c42] bg-[#11101d] py-0 pl-11 text-[14px] tracking-normal text-[#f1edf7] placeholder:text-[#5f596d] focus:border-[#efa975] focus:ring-[#efa975]/20"
            />
          </div>
          <Button
            label="Sign In"
            size="md"
            variant="primary"
            rightIcon={<ArrowRightIcon />}
          />

        </form>
      </section>
    </main>
  );
};

export default Login;
