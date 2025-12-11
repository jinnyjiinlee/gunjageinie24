interface NavLink {
  href: string;
  label: string;
}

interface PosterNavProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { href: '/posters', label: '포스터 모음' },
  { href: '/', label: '홈으로' },
];

export default function PosterNav({ links = defaultLinks }: PosterNavProps) {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '40px' }}>
      {links.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          style={{
            color: '#8B95A1',
            textDecoration: 'none',
            fontSize: '14px',
            marginRight: i < links.length - 1 ? '24px' : 0,
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
