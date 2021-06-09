<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>신규 상장주
                </p>
                <p class="subtitle">
                    최근 상장한 주식들입니다.
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
            <!--table-->
            </div>
            <div class="column"></div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData(){
            const dogBreeds = await axios.get('');
            //alert(object.keys(dogBreeds));
            return {
                tableDogBreeds: dogBreeds.data.message,
                tableDogKeys: object.keys(dogBreeds)
            }
        }
    };
</script>
