import { Activity, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg">mHealth Explained</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making digital health understandable for everyone. Expert-backed, beginner-friendly
              explanations of mobile health technologies and wearables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About This Project
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How mHealth Works
                </Link>
              </li>
              <li>
                <Link to="/ethics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ethics & Privacy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To demystify mHealth and wearables by providing accessible, evidence-based learning
              that connects personal devices to the bigger picture of healthcare.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} mHealth Explained. Educational resource for health informatics.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-secondary fill-secondary" /> for health literacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
