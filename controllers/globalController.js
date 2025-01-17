import routes from '../routes';

export const home = (req, res) => {
  res.render('home', {
    pageTitle: 'Rabbit Sitter Hana - Home',
  });
};

export const about = (req, res) => {
  res.render('about', {
    pageTitle: 'Rabbit Sitter Hana - About Us',
  });
};

export const plan = (req, res) => {
  res.render('plan', {
    pageTitle: 'Rabbit Sitter Hana - Plan',
  });
};

export const service = (req, res) => {
  res.render('service', {
    pageTitle: 'Rabbit Sitter Hana - Service',
  });
};

export const contact = (req, res) => {
  res.render('contact', {
    pageTitle: 'Rabbit Sitter Hana - Contact Us',
  });
};

export const mail = (req, res) => {
  res.render('mail', {
    pageTitle: 'Rabbit Sitter Hana - e-mail',
  });
};

