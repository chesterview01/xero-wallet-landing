import { Twitter, Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-xero-navy border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-xero-turquoise flex items-center justify-center">
                <span className="text-xero-navy font-bold text-xl font-display">X</span>
              </div>
              <span className="text-white font-display font-bold text-xl">Xero Wallet</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Tu aliado financiero en Venezuela. Protege tu dinero contra la inflación y realiza transacciones seguras.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-xero-turquoise hover:text-xero-navy transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-xero-turquoise hover:text-xero-navy transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-xero-turquoise hover:text-xero-navy transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#beneficios" className="text-white/60 hover:text-xero-turquoise transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-xero-turquoise transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-xero-turquoise transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-xero-turquoise transition-colors">
                  Términos de servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:soporte@xerowallet.com" 
                  className="text-white/60 hover:text-xero-turquoise transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  soporte@xerowallet.com
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-xero-turquoise transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat de soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Xero Wallet. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
