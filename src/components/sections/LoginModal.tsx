import React from 'react';
import Image from 'next/image';
import { EyeOff, X } from 'lucide-react';

/**
 * LoginModal Component
 * 
 * A pixel-perfect clone of the central login modal overlay.
 * Features:
 * - Space-themed background image
 * - Pi logo
 * - 'I am Cool, therefore I am' headline with emojis
 * - Email and Password fields
 * - Styled white Login button
 * - Google SSO option
 */

const LoginModal: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
      {/* Modal Container */}
      <div className="relative w-full max-w-[500px] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          className="absolute -right-10 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Main Card with Background Image */}
        <div 
          className="relative overflow-hidden rounded-[12px] shadow-2xl transition-all"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/665da0f8ce17474eb17a8480f2294e47adebe9d6c293a73f81-19.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '560px'
          }}
        >
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Inner Content Wrapper (Glassmorphism effect container as seen in design) */}
          <div className="relative z-10 flex h-full flex-col items-center px-8 pt-10 pb-12">
            
            {/* Logo Wrapper */}
            <div className="mb-6 flex w-full justify-start pl-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/svgs/logo-1.svg" 
                  alt="Pi Logo" 
                  width={24} 
                  height={24}
                  className="brightness-0 invert"
                />
              </div>
            </div>

            {/* Glass Box Container for Form Elements */}
            <div className="w-full flex-1 rounded-[12px] border border-white/10 bg-white/5 p-8 backdrop-blur-[15px]">
              
              {/* Headline */}
              <h2 className="mb-8 text-center text-[22px] font-normal leading-tight text-white">
                I am Cool🛸, therefore I am✨!
              </h2>

              {/* Login Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Please enter your email address"
                    className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-[14px] text-white placeholder:text-gray-400 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Please input a password"
                    className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-3 text-[14px] text-white placeholder:text-gray-400 focus:border-primary focus:outline-none transition-colors"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <button type="button" className="text-gray-400 hover:text-white transition-colors">
                      <EyeOff size={18} />
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="flex justify-start">
                  <a href="#" className="text-[12px] text-gray-400 hover:text-white transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-white py-3.5 text-[18px] font-medium text-black hover:bg-gray-100 transition-all active:scale-[0.98]"
                >
                  Login
                </button>

                {/* Registration Link */}
                <div className="text-center text-[13px] text-white/80">
                  Not registered yet? <a href="#" className="text-[#5FC4FF] hover:underline">Free registration</a>
                </div>

                {/* Divider/Or Space Alternative */}
                <div className="my-6"></div>

                {/* Google SSO Button */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-[#3b4b61]/60 py-3 text-[14px] text-white hover:bg-[#3b4b61]/80 transition-all"
                >
                  {/* Mock Google Icon using styles similar to high-level design */}
                  <div className="flex size-5 items-center justify-center rounded-full bg-white p-1">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                  Sign in with Google
                </button>
              </form>
            </div>

            {/* Footer Text */}
            <div className="mt-8 text-center text-[14px] font-light tracking-wide text-white/60">
              Presentation Intelligence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;