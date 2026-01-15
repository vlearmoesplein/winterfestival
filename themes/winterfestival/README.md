# Conf Theme for Hugo

A modern, clean conference theme for Hugo inspired by the Conf theme from GetHugoThemes.

## Features

- **Hero Section** - Eye-catching landing section with event details
- **Speakers Section** - Showcase your conference speakers
- **Schedule Section** - Display your conference schedule/timeline
- **Sponsors Section** - Highlight your sponsors
- **Contact/Registration Form** - Registration form for attendees
- **Responsive Design** - Mobile-friendly layout
- **Modern UI** - Clean, professional design with gradient accents

## Installation

1. Copy the `conf` theme folder to your Hugo site's `themes` directory
2. Update your `hugo.toml` to use the theme:
   ```toml
   theme = "conf"
   ```

## Configuration

The theme is configured through your `hugo.toml` file. See the example configuration in the main site's `hugo.toml` for all available parameters.

### Key Parameters

- `params.hero.*` - Hero section configuration
- `params.about.*` - About section settings
- `params.speakers.*` - Speakers section settings
- `params.schedule.*` - Schedule section settings
- `params.sponsors.*` - Sponsors section settings
- `params.contact.*` - Contact/registration form settings
- `params.social.*` - Social media links

## Content Structure

### Speakers

Create speaker pages in `content/speakers/`:

```markdown
---
title: "Speaker Name"
role: "Job Title"
company: "Company Name"
image: "/images/speaker.jpg"
twitter: "https://twitter.com/username"
linkedin: "https://linkedin.com/in/username"
---
```

### Schedule

Create schedule data in `data/schedule.yaml`:

```yaml
- day: "Day 1"
  events:
    - time: "09:00"
      title: "Event Title"
      speaker: "Speaker Name"
      description: "Event description"
```

### Sponsors

Create sponsor data in `data/sponsors.yaml`:

```yaml
- name: "Sponsor Name"
  logo: "/images/sponsor-logo.png"
```

## Customization

### Colors

Edit the CSS variables in `assets/css/main.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Layouts

All layouts are in `layouts/` and can be customized to match your needs.

## License

MIT
