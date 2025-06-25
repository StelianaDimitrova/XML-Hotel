<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"/>

    <xsl:template match="/">
        <xsl:for-each select="/hotel/room/reservation">


            Резервация: <xsl:value-of select="reservation"/> <xsl:value-of select="@code"/>

            Име:  <xsl:value-of select="guest_name"/>
            Телефонен номер:  <xsl:value-of select="phone_number"/>
            Дата на настаняване:  <xsl:value-of select="check_in_date"/>
            Дата на напускане <xsl:value-of select="check_out_date"/> 

        </xsl:for-each>
    </xsl:template>

</xsl:stylesheet>