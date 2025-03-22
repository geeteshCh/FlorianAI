import Head from 'next/head';
import '../styles/bootstrap.css';
import '../styles/style.css';
import '../styles/responsive.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Carint</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="/images/fevicon.png" type="" />
      </Head>

      {/* Full Page Wrapper */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="sub_page">
            <div className="hero_area">
              {/* Header Section */}
              <header className="header_section">
                <div className="header_bottom">
                  <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                      <a className="navbar-brand" href="index.html">
                        <span>Empathetic Presentation Helper</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </header>
            </div>

            {/* Service Section */}
            <section className="service_section layout_padding">
              <div className="service_container">
                <div className="container">
                  <div className="heading_container">
                    <h2>Our <span>Services</span></h2>
                    <p>There are many variations of AI flavours that you can use to enhance your presentation.</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="box">
                        <div className="img-box">
                          <img src="/images/char1.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Complete Rework</h5>
                          <p>Bigger changes if you have more time until your presentation</p>
                          <Link href="/character-1">
                            <button>Try Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box">
                        <div className="img-box">
                          <img src="/images/char1.png" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Polish Up</h5>
                          <p>Minimal edits, meant for last minute presentations</p>
                          <Link href="/character-2">
                            <button>Try Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="box">
                        <div className="img-box">
                          <img src="/images/char3.webp" alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>Shakespeare</h5>
                          <p>Get help from Shakespeare himself to improve your presentation</p>
                          <Link href="/character-3">
                            <button>Try Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ✅ Footer Section - Same as RootLayout.tsx */}
        <footer style={{ backgroundColor: "#04233b" }} className="text-white py-4">
          <div className="container">
            <div className="row justify-center items-center">
              <div className="flex justify-center items-center">
                <h4>Powered by Hume AI</h4>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
