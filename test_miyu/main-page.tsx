import React from 'react';
import { Menu, X, Mail, MapPin, ArrowRight } from 'lucide-react';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: ''
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume', path: '/resume' },
    { id: 'research', label: 'Research', path: '/research' },
    { id: 'art', label: 'Art', path: '/art' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">Logo</div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path || `#${item.id}`}
                  className="text-sm hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path || `#${item.id}`}
                  className="block px-3 py-2 text-base hover:bg-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                  Your Name
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  基礎科学特別研究員 at 理化学研究所
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  ここに自己紹介文が入ります。研究内容や興味分野について簡潔に説明します。
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 p-1">
                  <img
                    src="/api/placeholder/800/800"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Overview */}
        <section id="research-overview" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Research</h2>
            <div className="bg-gray-900 p-8 rounded-2xl mb-8">
              <p className="text-gray-300 mb-6">
                研究の概要について説明します。主な研究分野や興味のある課題について記載します。
              </p>
              <a 
                href="/research" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Art Overview */}
        <section id="art-overview" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Art</h2>
            <div className="bg-gray-900 p-8 rounded-2xl mb-8">
              <p className="text-gray-300 mb-6">
                アートワークの概要について説明します。主な作品のテーマや技法について記載します。
              </p>
              <a 
                href="/art" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">所在地</h3>
                    <p className="text-gray-400">〒XXX-XXXX</p>
                    <p className="text-gray-400">所在地が入ります</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">お名前</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                    required
                  />
                </div>
                {/* Other form fields... */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>送信する</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
