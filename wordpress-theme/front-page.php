<?php
/**
 * Front Page Template
 *
 * @package PrimeSource
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php get_template_part('template-parts/section', 'hero'); ?>
    <?php get_template_part('template-parts/section', 'services'); ?>
    <?php get_template_part('template-parts/section', 'about'); ?>
    <?php get_template_part('template-parts/section', 'case-studies'); ?>
    <?php get_template_part('template-parts/section', 'blog'); ?>
    <?php get_template_part('template-parts/section', 'contact'); ?>
</main>

<?php
get_footer();
