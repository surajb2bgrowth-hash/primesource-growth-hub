<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <span class="site-title"><?php bloginfo('name'); ?></span>
                <?php endif; ?>
            </a>

            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
                <span class="screen-reader-text"><?php esc_html_e('Menu', 'primesource'); ?></span>
            </button>

            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'fallback_cb'    => 'primesource_fallback_menu',
                ));
                ?>
            </nav>
        </div>
    </div>
</header>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function primesource_fallback_menu() {
    ?>
    <ul id="primary-menu">
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <?php
}
?>
