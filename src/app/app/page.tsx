import Image from 'next/image';
import Link from 'next/link';

export default function AppPage() {
  const features = [
    {
      title: 'AI-Powered Support',
      description: 'Advanced AI algorithms provide personalized mental health support and guidance.',
      icon: '🤖',
    },
    {
      title: 'Privacy-First',
      description: 'Your data is encrypted and protected with state-of-the-art security measures.',
      icon: '🔒',
    },
    {
      title: 'Evidence-Based',
      description: 'Techniques and recommendations based on proven psychological research.',
      icon: '📚',
    },
    {
      title: '24/7 Availability',
      description: 'Access support whenever you need it, day or night.',
      icon: '⏰',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Meet OSAT
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Your AI-powered mental health companion. OSAT combines cutting-edge artificial
          intelligence with evidence-based psychological approaches to provide personalized
          support when you need it most.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#download"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Now
          </Link>
          <Link
            href="#learn-more"
            className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16" id="learn-more">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose OSAT?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-50 rounded-2xl my-16" id="download">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Started with OSAT
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download OSAT now and take the first step towards better mental well-being.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Google Play
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Help?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Our support team is here to assist you with any questions or concerns.
        </p>
        <Link
          href="mailto:support@osat-app.com"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Contact Support →
        </Link>
      </section>
    </div>
  );
} 