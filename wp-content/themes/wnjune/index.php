<?php
get_header();
?>
<label for="userName">
    <input list="userlist"  onclick="this.class='abc'" type="text" autofocus/>
    <datalist id="userlist">
        <option>韩现龙</option>
        <option>周友立</option>
        <option>周2立</option>
        <option>周3立</option>
    </datalist>
</label>
<?php get_footer();?>