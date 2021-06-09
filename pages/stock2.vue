<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>코스닥
                </p>
                <p class="subtitle">
                    다양한 종목의 코스닥을 찾아봅시다.
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table">
                    <thead>

                    </thead>
                </table>
            </div>
            <div class="column"></div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData(){
            const stock2 = await axios.get('');
            //alert(object.keys(dogBreeds));
            return {
                
            }
        }
    };
</script>
