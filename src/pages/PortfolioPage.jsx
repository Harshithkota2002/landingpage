import React from "react";
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Snackbar,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import { Link as ScrollLink, Element } from "react-scroll";
import { portfolioData } from "../data/portfolioData";

/* -------------------- ambient lights (STATIC) -------------------- */
function AmbientLights({ mode }) {
  const isDark = mode === "dark";
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: isDark
            ? "radial-gradient(900px 520px at 14% 18%, rgba(99,102,241,0.16), transparent 62%), radial-gradient(820px 500px at 86% 20%, rgba(6,182,212,0.12), transparent 62%), radial-gradient(900px 560px at 52% 110%, rgba(16,185,129,0.10), transparent 65%), linear-gradient(180deg, #070B12 0%, #07111E 40%, #061018 100%)"
            : "radial-gradient(900px 520px at 14% 18%, rgba(99,102,241,0.18), transparent 62%), radial-gradient(820px 500px at 86% 20%, rgba(6,182,212,0.12), transparent 62%), radial-gradient(900px 560px at 52% 110%, rgba(16,185,129,0.10), transparent 65%), linear-gradient(180deg, #F7FAFF 0%, #F6F3FF 35%, #F6FFFB 100%)",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          width: 520,
          height: 520,
          left: -150,
          top: 80,
          borderRadius: 999,
          background: isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.14)",
          filter: "blur(72px)",
          opacity: 0.85,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          width: 460,
          height: 460,
          right: -150,
          top: 120,
          borderRadius: 999,
          background: isDark ? "rgba(6,182,212,0.10)" : "rgba(6,182,212,0.12)",
          filter: "blur(72px)",
          opacity: 0.8,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          width: 520,
          height: 520,
          left: "36%",
          bottom: -240,
          borderRadius: 999,
          background: isDark ? "rgba(16,185,129,0.09)" : "rgba(16,185,129,0.10)",
          filter: "blur(78px)",
          opacity: 0.8,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}

/* -------------------- hooks -------------------- */
function useUsername() {
  const [name, setName] = React.useState(portfolioData.defaultName || "Harsha");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("username");
    if (raw && raw.trim()) {
      const cleaned = raw.trim().slice(0, 28);
      setName(cleaned.charAt(0).toUpperCase() + cleaned.slice(1));
    }
  }, []);

  return name;
}

/* -------------------- UI blocks -------------------- */
function CardShell({ mode, active = false, children, sx }) {
  const isDark = mode === "dark";
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: active
          ? isDark
            ? "rgba(99,102,241,0.34)"
            : "rgba(99,102,241,0.26)"
          : isDark
          ? "rgba(255,255,255,0.10)"
          : "rgba(15,23,42,0.10)",
        background: isDark
          ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
          : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.78))",
        boxShadow: isDark
          ? "0 12px 36px rgba(0,0,0,0.28)"
          : "0 12px 34px rgba(15,23,42,0.10)",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: isDark
            ? "radial-gradient(600px 220px at 15% 0%, rgba(99,102,241,0.12), transparent 60%)"
            : "radial-gradient(600px 220px at 15% 0%, rgba(99,102,241,0.10), transparent 60%)",
          opacity: 0.9,
        }}
      />
      <Box sx={{ position: "relative", zIndex: 1, p: { xs: 2, md: 2.6 } }}>
        {children}
      </Box>
    </Box>
  );
}

function TitleBlock({ title, subtitle }) {
  return (
    <Stack spacing={0.6} sx={{ mb: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 950, letterSpacing: -0.7, lineHeight: 1.15 }}
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}

function StatPill({ mode, label, value, colors }) {
  const isDark = mode === "dark";
  return (
    <Box
      sx={{
        px: 1.4,
        py: 1.1,
        borderRadius: 2.2,
        border: "1px solid",
        borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
        background: isDark
          ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
          : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.72))",
        minWidth: 150,
      }}
    >
      <Typography sx={{ fontWeight: 950, fontSize: 15.5, lineHeight: 1.15 }}>
        <Box
          component="span"
          sx={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {value}
        </Box>
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800 }}>
        {label}
      </Typography>
    </Box>
  );
}

/* -------------------- Stars -------------------- */
// ✅ Supports both 0..10 and 0..100 levels
const toStars = (level) => {
  const n = Number(level);
  if (!Number.isFinite(n)) return 3;
  const normalized = n <= 10 ? (n / 10) * 100 : n; // 0..100
  const stars = Math.round(normalized / 20); // 0..5
  return Math.max(1, Math.min(5, stars));
};

function StarRating({ value = 3 }) {
  return (
    <Box sx={{ display: "flex", gap: 0.35, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Box
          key={i}
          sx={{
            fontSize: 18,
            lineHeight: 1,
            color: i <= value ? "#FACC15" : "rgba(148,163,184,0.55)",
          }}
        >
          ★
        </Box>
      ))}
    </Box>
  );
}

function SkillRow({ mode, name, level }) {
  const isDark = mode === "dark";
  const stars = toStars(level);

  return (
    <Box
      sx={{
        p: 1.6,
        borderRadius: 2.5,
        border: "1px solid",
        borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
        background: isDark
          ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
          : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontWeight: 950 }}>{name}</Typography>
        <Chip
          size="small"
          label={`${stars}/5`}
          sx={{
            borderRadius: 2,
            fontWeight: 950,
            bgcolor: isDark ? "rgba(99,102,241,0.14)" : "rgba(99,102,241,0.10)",
            border: "1px solid",
            borderColor: isDark ? "rgba(99,102,241,0.26)" : "rgba(99,102,241,0.20)",
          }}
        />
      </Stack>
      <Box sx={{ mt: 0.8 }}>
        <StarRating value={stars} />
      </Box>
    </Box>
  );
}

/* -------------------- Animations (NO HOVER) -------------------- */
function SoftFloatImage({ src, alt, mode }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        animation: "float 6s ease-in-out infinite",
        "@keyframes float": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 3,
          border: "1px solid",
          borderColor: mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
        }}
      />
    </Box>
  );
}

/* ✅ Auto sliding gallery (no hover) */
function SkillsAutoGallery({ images = [], mode }) {
  const isDark = mode === "dark";
  const safe = Array.isArray(images) ? images.filter(Boolean) : [];
  const loop = [...safe, ...safe]; // duplicate for loop

  return (
    <Box
      sx={{
        mt: 1.2,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid",
        borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
        background: isDark
          ? "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
          : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75))",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1.2,
          p: 1.4,
          width: "max-content",
          animation: "marquee 28s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {loop.map((src, i) => (
          <Box
            key={`${src}-${i}`}
            sx={{
              width: { xs: 180, sm: 220 },
              height: 130,
              borderRadius: 2.4,
              overflow: "hidden",
              border: "1px solid",
              borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
              background: isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)",
              flex: "0 0 auto",
            }}
          >
            <Box
              component="img"
              src={src}
              alt="skill"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/* -------------------- page -------------------- */
export default function PortfolioPage({ mode, setMode }) {
  const name = useUsername();
  const isMdUp = useMediaQuery("(min-width:900px)");

  const [activeId, setActiveId] = React.useState("home");
  const [mobileMenuEl, setMobileMenuEl] = React.useState(null);
  const [toast, setToast] = React.useState({ open: false, text: "" });

  const colors =
    mode === "dark"
      ? {
          primary: "#6366F1",
          accent: "#06B6D4",
          text: "rgba(255,255,255,0.92)",
          sub: "rgba(255,255,255,0.74)",
        }
      : {
          primary: "#5B5EF2",
          accent: "#05B6D6",
          text: "rgba(15,23,42,0.92)",
          sub: "rgba(15,23,42,0.72)",
        };

  React.useEffect(() => {
    const ids = ["home", "about", "skills", "education", "projects", "experience", "resume", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (best?.target?.id) setActiveId(best.target.id);
      },
      { threshold: [0.35, 0.45, 0.55] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    setActiveId(id);
  };

  const scrollToTop = () => jumpTo("home");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.hero.email);
      setToast({ open: true, text: "Email copied!" });
    } catch {
      setToast({ open: true, text: "Copy failed. Please copy manually." });
    }
  };

  const bg = mode === "dark" ? "#070B12" : "#F5F8FF";

  return (
    <Box sx={{ minHeight: "100vh", background: bg, position: "relative" }}>
      <AmbientLights mode={mode} />

      {/* NAV */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(14px)",
          backgroundColor: mode === "dark" ? "rgba(8,12,20,0.84)" : "rgba(245,248,255,0.94)",
          borderBottom: "1px solid",
          borderColor: mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
          zIndex: 5,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 }, gap: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mr: 1 }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                boxShadow:
                  mode === "dark"
                    ? "0 0 0 7px rgba(99,102,241,0.10)"
                    : "0 0 0 7px rgba(99,102,241,0.08)",
              }}
            />
            <Typography sx={{ fontWeight: 950, letterSpacing: -0.3 }}>
              {portfolioData.brand}
            </Typography>
          </Stack>

          {isMdUp ? (
            <Box
              sx={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: `repeat(${navItems.length}, minmax(0, 1fr))`,
                gap: 0.6,
              }}
            >
              {navItems.map((n) => {
                const active = n.id === activeId;
                return (
                  <ScrollLink
                    key={n.id}
                    to={n.id}
                    smooth={false}
                    duration={0}
                    offset={-84}
                    onClick={() => setActiveId(n.id)}
                  >
                    <Button
                      fullWidth
                      size="small"
                      sx={{
                        textTransform: "none",
                        fontWeight: 950,
                        borderRadius: 2,
                        py: 0.95,
                        color: active
                          ? "#fff"
                          : mode === "dark"
                          ? "rgba(255,255,255,0.84)"
                          : "rgba(15,23,42,0.86)",
                        background: active
                          ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                          : "transparent",
                        border: "1px solid",
                        borderColor: active ? "rgba(99,102,241,0.34)" : "transparent",
                      }}
                    >
                      {n.label}
                    </Button>
                  </ScrollLink>
                );
              })}
            </Box>
          ) : (
            <Box sx={{ flex: 1 }} />
          )}

          {!isMdUp ? (
            <>
              <Tooltip title="Menu">
                <IconButton
                  onClick={(e) => setMobileMenuEl(e.currentTarget)}
                  sx={{
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor:
                      mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.10)",
                    background:
                      mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.80)",
                  }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={mobileMenuEl}
                open={Boolean(mobileMenuEl)}
                onClose={() => setMobileMenuEl(null)}
                MenuListProps={{ dense: true }}
              >
                {navItems.map((n) => (
                  <MenuItem
                    key={n.id}
                    onClick={() => {
                      setMobileMenuEl(null);
                      jumpTo(n.id);
                    }}
                  >
                    {n.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : null}

          <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
            <IconButton
              onClick={() => setMode((p) => (p === "dark" ? "light" : "dark"))}
              sx={{
                borderRadius: 2,
                border: "1px solid",
                borderColor:
                  mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.10)",
                background:
                  mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.80)",
              }}
            >
              {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* PAGE */}
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 2.2, md: 2.8 }, position: "relative", zIndex: 2 }}
      >
        <Stack spacing={1.8}>
          {/* HOME */}
          <Element name="home">
            <Box id="home" />
            <CardShell mode={mode} active={activeId === "home"}>
              <Grid container spacing={{ xs: 2, md: 2.6 }} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Stack spacing={1.6}>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      <Chip
                        label={`Welcome to ${name} world`}
                        sx={{
                          fontWeight: 950,
                          borderRadius: 2,
                          background:
                            mode === "dark" ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.14)",
                          border: "1px solid",
                          borderColor:
                            mode === "dark" ? "rgba(99,102,241,0.30)" : "rgba(99,102,241,0.22)",
                        }}
                      />
                      <Chip
                        label={portfolioData.hero.location}
                        variant="outlined"
                        sx={{ fontWeight: 900, borderRadius: 2 }}
                      />
                    </Stack>

                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 950,
                        letterSpacing: -1.3,
                        lineHeight: 1.05,
                        color: colors.text,
                      }}
                    >
                      {name}{" "}
                      <Box
                        component="span"
                        sx={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {portfolioData.roles?.[0] || ""}
                      </Box>
                    </Typography>

                    <Typography variant="h6" sx={{ lineHeight: 1.6, color: colors.sub }}>
                      {portfolioData.hero.headline}
                    </Typography>

                    <Typography sx={{ maxWidth: 720, color: colors.sub }}>
                      {portfolioData.hero.subline}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ pt: 0.2 }}>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 950,
                          px: 3,
                          textTransform: "none",
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                        }}
                        component="a"
                        href={`mailto:${portfolioData.hero.email}`}
                      >
                        Hire Me
                      </Button>

                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 950,
                          px: 3,
                          textTransform: "none",
                          borderColor:
                            mode === "dark" ? "rgba(255,255,255,0.20)" : "rgba(15,23,42,0.18)",
                        }}
                        component="a"
                        href={`mailto:${portfolioData.hero.email}`}
                      >
                        Contact
                      </Button>

                      <Button
                        variant="text"
                        sx={{
                          borderRadius: 2,
                          fontWeight: 950,
                          px: 1.6,
                          textTransform: "none",
                          color: colors.primary,
                        }}
                        component="a"
                        href={portfolioData.hero.github}
                        target="_blank"
                        rel="noreferrer"
                        endIcon={<OpenInNewRoundedIcon />}
                      >
                        GitHub
                      </Button>

                      <Tooltip title="Copy Email">
                        <IconButton
                          onClick={copyEmail}
                          sx={{
                            borderRadius: 2,
                            border: "1px solid",
                            borderColor:
                              mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.10)",
                            background:
                              mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.80)",
                          }}
                        >
                          <ContentCopyRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <Stack direction="row" spacing={1.1} flexWrap="wrap">
                      {portfolioData.hero.quickStats.map((s) => (
                        <StatPill
                          key={s.label}
                          mode={mode}
                          label={s.label}
                          value={s.value}
                          colors={colors}
                        />
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      width: { xs: 290, md: 370 },
                      height: { xs: 290, md: 370 },
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor:
                        mode === "dark" ? "rgba(255,255,255,0.14)" : "rgba(15,23,42,0.12)",
                      background: mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
                      mx: "auto",
                      boxShadow:
                        mode === "dark"
                          ? "0 22px 70px rgba(0,0,0,0.30)"
                          : "0 22px 70px rgba(15,23,42,0.12)",
                    }}
                  >
                    <SoftFloatImage src={portfolioData.hero.profileImage} alt={name} mode={mode} />
                  </Box>

                  <Stack direction="row" spacing={2} sx={{ mt: 1.4, justifyContent: "center" }}>
                    <Link
                      href={portfolioData.hero.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                      sx={{ fontWeight: 900 }}
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href={portfolioData.hero.github}
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                      sx={{ fontWeight: 900 }}
                    >
                      GitHub
                    </Link>
                  </Stack>
                </Grid>
              </Grid>
            </CardShell>
          </Element>

          {/* ABOUT */}
          <Element name="about">
            <Box id="about" />
            <CardShell mode={mode} active={activeId === "about"}>
              <TitleBlock title={portfolioData.about.title} subtitle="A quick introduction about me." />

              <Grid container spacing={2.2}>
                <Grid item xs={12} md={7}>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.9, whiteSpace: "pre-line" }}>
                    {portfolioData.about.body}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Grid container spacing={1.1}>
                    {portfolioData.about.highlights.map((h) => (
                      <Grid item xs={12} key={h}>
                        <Box
                          sx={{
                            p: 1.35,
                            borderRadius: 2.4,
                            border: "1px solid",
                            borderColor:
                              mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                            background:
                              mode === "dark"
                                ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                                : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                          }}
                        >
                          <Typography sx={{ fontWeight: 950 }}>{h}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </CardShell>
          </Element>

          {/* ✅ SKILLS (UPDATED: stars + auto gallery images) */}
          <Element name="skills">
            <Box id="skills" />
            <CardShell mode={mode} active={activeId === "skills"}>
              <TitleBlock title={portfolioData.skills.title} subtitle="Core strengths and tools I work with." />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={1.4}>
                    {portfolioData.skills.items.map((s) => (
                      <Grid item xs={12} sm={6} key={s.name}>
                        <SkillRow mode={mode} name={s.name} level={s.level} />
                      </Grid>
                    ))}
                  </Grid>

                  <Box
                    sx={{
                      mt: 1.5,
                      p: 2,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor:
                        mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                      background:
                        mode === "dark"
                          ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                    }}
                  >
                    <Typography sx={{ fontWeight: 950, mb: 1.0 }}>Focus Areas</Typography>
                    <Stack spacing={0.75}>
                      <Typography variant="body2" color="text.secondary">
                        • Modern UI (MUI / Tailwind) + responsive layouts
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Clean Node.js APIs, JWT auth, scalable structure
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Redux state management, performance, code quality
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor:
                        mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                      background:
                        mode === "dark"
                          ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                    }}
                  >
                    <Typography sx={{ fontWeight: 950, mb: 1.0 }}>
                      Skills Gallery (Auto Slide)
                    </Typography>

                    <SkillsAutoGallery images={portfolioData.skills.images} mode={mode} />

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.1 }}>
                      Tip: replace these images with real project screenshots.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardShell>
          </Element>

          {/* EDUCATION */}
          <Element name="education">
            <Box id="education" />
            <CardShell mode={mode} active={activeId === "education"}>
              <TitleBlock title={portfolioData.education.title} subtitle="My academic journey." />

              <Grid container spacing={1.2}>
                {portfolioData.education.items.map((e) => (
                  <Grid item xs={12} md={6} key={e.course}>
                    <Box
                      sx={{
                        p: 2.2,
                        borderRadius: 3,
                        border: "1px solid",
                        borderColor:
                          mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                        background:
                          mode === "dark"
                            ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                            : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                      }}
                    >
                      <Typography sx={{ fontWeight: 950, fontSize: 17 }}>{e.course}</Typography>
                      <Typography color="text.secondary" sx={{ fontWeight: 900 }}>
                        {e.school}
                      </Typography>

                      <Chip
                        label={e.year}
                        size="small"
                        sx={{
                          mt: 1.1,
                          borderRadius: 2,
                          fontWeight: 950,
                          bgcolor: mode === "dark" ? "rgba(99,102,241,0.14)" : "rgba(99,102,241,0.12)",
                          border: "1px solid",
                          borderColor: mode === "dark" ? "rgba(99,102,241,0.26)" : "rgba(99,102,241,0.22)",
                        }}
                      />

                      {e.note ? (
                        <Typography color="text.secondary" sx={{ mt: 1.1 }}>
                          {e.note}
                        </Typography>
                      ) : null}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardShell>
          </Element>

          {/* PROJECTS */}
          <Element name="projects">
            <Box id="projects" />
            <CardShell mode={mode} active={activeId === "projects"}>
              <TitleBlock title={portfolioData.projects.title} subtitle="Some projects I’m proud of." />

              <Grid container spacing={1.2}>
                {portfolioData.projects.items.map((p) => (
                  <Grid item xs={12} md={4} key={p.title}>
                    <Box
                      sx={{
                        p: 2.2,
                        borderRadius: 3,
                        border: "1px solid",
                        borderColor:
                          mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                        background:
                          mode === "dark"
                            ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                            : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ fontWeight: 950, fontSize: 17 }}>{p.title}</Typography>

                      <Stack direction="row" spacing={0.7} flexWrap="wrap" sx={{ mt: 1 }}>
                        {p.tags.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size="small"
                            sx={{
                              borderRadius: 2,
                              fontWeight: 850,
                              bgcolor: mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.92)",
                              border: "1px solid",
                              borderColor:
                                mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                            }}
                          />
                        ))}
                      </Stack>

                      <Typography color="text.secondary" sx={{ mt: 1.1, lineHeight: 1.75 }}>
                        {p.desc}
                      </Typography>

                      <Button
                        sx={{
                          mt: 1.6,
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 950,
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                        }}
                        variant="contained"
                        endIcon={<OpenInNewRoundedIcon />}
                        component="a"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Demo
                      </Button>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardShell>
          </Element>

          {/* EXPERIENCE */}
          <Element name="experience">
            <Box id="experience" />
            <CardShell mode={mode} active={activeId === "experience"}>
              <TitleBlock title={portfolioData.experience.title} subtitle="Where I’ve worked & what I delivered." />

              <Stack spacing={1.2}>
                {portfolioData.experience.items.map((x) => (
                  <Box
                    key={`${x.role}-${x.company}`}
                    sx={{
                      p: 2.2,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor:
                        mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(15,23,42,0.10)",
                      background:
                        mode === "dark"
                          ? "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                          : "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.74))",
                    }}
                  >
                    <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={1}>
                      <Box>
                        <Typography sx={{ fontWeight: 950, fontSize: 17 }}>{x.role}</Typography>
                        <Typography color="text.secondary" sx={{ fontWeight: 900 }}>
                          {x.company}
                        </Typography>
                      </Box>

                      <Chip
                        label={x.period}
                        sx={{
                          borderRadius: 2,
                          fontWeight: 950,
                          bgcolor: mode === "dark" ? "rgba(99,102,241,0.14)" : "rgba(99,102,241,0.12)",
                          border: "1px solid",
                          borderColor: mode === "dark" ? "rgba(99,102,241,0.26)" : "rgba(99,102,241,0.22)",
                        }}
                      />
                    </Stack>

                    <Divider sx={{ my: 1.2, opacity: 0.35 }} />

                    <Stack spacing={0.8}>
                      {x.points.map((pt) => (
                        <Typography key={pt} color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          • {pt}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </CardShell>
          </Element>

          {/* RESUME */}
          <Element name="resume">
            <Box id="resume" />
            <CardShell mode={mode} active={activeId === "resume"}>
              <TitleBlock title={portfolioData.resume.title} subtitle="Download and update your resume link." />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2} alignItems="center">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadRoundedIcon />}
                  component="a"
                  href={portfolioData.resume.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 950,
                    px: 2.6,
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  }}
                >
                  {portfolioData.resume.downloadText}
                </Button>

                <Typography color="text.secondary">
                  Replace <b>resumeLink</b> in <b>portfolioData.js</b> with your URL.
                </Typography>
              </Stack>
            </CardShell>
          </Element>

          {/* CONTACT */}
          <Element name="contact">
            <Box id="contact" />
            <CardShell mode={mode} active={activeId === "contact"}>
              <TitleBlock title={portfolioData.contact.title} subtitle={portfolioData.contact.note} />

              <Stack spacing={1}>
                <Typography color="text.secondary">
                  Email:{" "}
                  <Link href={`mailto:${portfolioData.contact.email || portfolioData.hero.email}`} underline="hover">
                    {portfolioData.contact.email || portfolioData.hero.email}
                  </Link>{" "}
                  <Button onClick={copyEmail} size="small" sx={{ ml: 1, textTransform: "none", fontWeight: 900 }}>
                    Copy
                  </Button>
                </Typography>

                <Typography color="text.secondary">
                  Location: <b>{portfolioData.contact.location}</b>
                </Typography>

                <Typography color="text.secondary">
                  LinkedIn:{" "}
                  <Link href={portfolioData.hero.linkedin} target="_blank" rel="noreferrer" underline="hover">
                    Open Profile
                  </Link>
                </Typography>

                <Typography color="text.secondary">
                  GitHub:{" "}
                  <Link href={portfolioData.hero.github} target="_blank" rel="noreferrer" underline="hover">
                    Open Profile
                  </Link>
                </Typography>

                <Divider sx={{ my: 1.0, opacity: 0.35 }} />

                <Typography variant="body2" color="text.secondary">
                  Tip: open (example){" "}
                  <Box component="span" sx={{ fontWeight: 950 }}>
                    /?username=Kota Harshith
                  </Box>
                </Typography>
              </Stack>
            </CardShell>

            <Box
              sx={{
                py: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.9 }}>
                © {new Date().getFullYear()} {name} • Built with React + MUI
              </Typography>

              <Button
                onClick={scrollToTop}
                startIcon={<KeyboardArrowUpRoundedIcon />}
                sx={{
                  textTransform: "none",
                  fontWeight: 950,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor:
                    mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.10)",
                  bgcolor: mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
                }}
              >
                Back to top
              </Button>
            </Box>
          </Element>
        </Stack>
      </Container>

      <Snackbar
        open={toast.open}
        message={toast.text}
        autoHideDuration={1800}
        onClose={() => setToast({ open: false, text: "" })}
      />
    </Box>
  );
}
