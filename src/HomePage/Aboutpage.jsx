import React from "react";

const AboutAndPackages = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <section className="about-section text-center mb-16">
        <h2 className="text-4xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to our platform! We provide simple and cost-effective
          solutions for managing your team and business operations. Our platform
          helps small to medium-sized businesses streamline their operations
          while keeping things organized and efficient. Join us today and take
          the next step in simplifying your business processes!
        </p>
      </section>

      {/* Packages Section */}
      <section className="packages-section bg-gray-100 py-12 rounded p-4">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="package-card   bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Maximum 5 Employees</h3>
            <p className="text-xl font-semibold text-primary mb-4">
              $5 / month
            </p>
            <p className="text-gray-600">
              Perfect for small teams or startups looking to get organized.
            </p>
          </div>

          <div className="package-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Maximum 10 Employees</h3>
            <p className="text-xl font-semibold text-primary mb-4">
              $8 / month
            </p>
            <p className="text-gray-600">
              Ideal for growing teams with a little more functionality.
            </p>
          </div>

          <div className="package-card bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Maximum 20 Employees</h3>
            <p className="text-xl font-semibold text-primary mb-4">
              $15 / month
            </p>
            <p className="text-gray-600">
              Best for medium-sized teams needing more features and scalability.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer bg-neutral text-neutral-content p-10 mt-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default AboutAndPackages;
