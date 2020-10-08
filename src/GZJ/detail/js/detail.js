<script type="text/javascript">
    $(function(){
        $('#img1').click(function(){
            $('#img1').css({display:'none'})
            $('#img2').css({display:'inline-block'})
            $('bb_show').css({display:'block'})
        }),
        $('#img2').click(function(){
            $('#img1').css({display:'inline-block'})
            $('#img2').css({display:'none'})
            $('bb_show').css({display:'none'})
        })
        
    })
</script>
